"use server";
import { nanoid } from "nanoid";
import { liveblocks } from "../liveblocks";
import { revalidatePath } from "next/cache";
import { getAccessType, parseStringify } from "../utils";
import { redirect } from "next/navigation";
import { clerkClient } from "@clerk/nextjs/server";
export const createDocument = async ({
  userId,
  email,
}: CreateDocumentParams) => {
  const roomId = nanoid();

  try {
    const metadata = {
      creatorId: userId,
      email,
      title: "Untitled",
    };
    const usersAccesses: RoomAccesses = {
      [email]: ["room:write"],
    };
    const room = await liveblocks.createRoom(roomId, {
      metadata,
      usersAccesses,
      defaultAccesses: [],
    });

    revalidatePath("/");

    return parseStringify(room);
  } catch (error) {}
};

export const getDocument= async({roomId, userId}:{roomId:string; userId:string})=>{


  try {
    const room = await liveblocks.getRoom(roomId);

    // const hasAccess = Object.keys(room.usersAccesses).includes(userId);

    // if (!hasAccess) {
    //   throw new Error("you do not have acess to this room");
    // }

    return parseStringify(room);
  } catch (error) {
    console.log(`Error happened while getting a room ${error}`)
  }
  
}




export const updateDocument = async(roomId:string, title:string)=>{
  try {
    const updatedRoom= await liveblocks.updateRoom(roomId,{
      metadata: {
        title: title
        }
    })

    revalidatePath(`/documents/${roomId}`)

    return parseStringify(updatedRoom)
  } catch (error) {
    
  }
}

export const getDocuments = async (
  email:string
)=> {
  try {
    const rooms = await liveblocks.getRooms({userId:email});

  
    return parseStringify(rooms);
  } catch (error) {
    console.log(`Error happened while getting a rooms ${error}`);
  }
};


export const updateDocumentAccess = async ({
  roomId,
  email,
  userType,
  updatedBy,
}: ShareDocumentParams) => {
  try {
    // Validate email format
    if (!email || !email.includes('@')) {
      throw new Error('Please enter a valid email address');
    }

    const usersAccesses: RoomAccesses = {
      [email]: getAccessType(userType) as AccessType,
    };

    const room = await liveblocks.updateRoom(roomId, {
      usersAccesses,
    });

    if (room) {
      const notificationId = nanoid();

      // Send Clerk Invitation (Email)
      try {
        await clerkClient.invitations.createInvitation({
          emailAddress: email,
          redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/documents/${roomId}`,
          ignoreExisting: true, // Don't fail if already invited
        });
      } catch (inviteError) {
        console.log(`Failed to send invitation email: ${inviteError}`);
        // Continue even if email fails, as access is already granted
      }

      // Send Liveblocks Notification (In-app)
      await liveblocks.triggerInboxNotification({
        userId: email,
        kind: "$documentAccess",
        subjectId: notificationId,
        activityData: {
          userType,
          title: `You have been granted ${userType} access to the document by ${updatedBy.name}`,
          updatedBy: updatedBy.name,
          avatar: updatedBy.avatar,
          email: updatedBy.email,
        },
        roomId,
      });
    }

    revalidatePath(`/documents/${roomId}`);
    return parseStringify(room);
  } catch (error) {
    console.log(`Error happened while updating a room access: ${error}`);
    throw error;
  }
};

export const removeCollaborator = async ({
  roomId,
  email,
}: {
  roomId: string;
  email: string;
}) => {
  try {
    const room = await liveblocks.getRoom(roomId);

    if (room.metadata.email === email) {
      throw new Error("You cannot remove yourself from the document");
    }

    const updatedRoom = await liveblocks.updateRoom(roomId, {
      usersAccesses: {
        [email]: null,
      },
    });

    revalidatePath(`/documents/${roomId}`);
    return parseStringify(updatedRoom);
  } catch (error) {
    console.log(`Error happened while removing a collaborator: ${error}`);
  }
};

export const deleteDocument = async (roomId: string) => {
  try {
    await liveblocks.deleteRoom(roomId);
    revalidatePath("/");
    redirect("/");
  } catch (error) {
    console.log(`Error happened while deleting a room: ${error}`);
  }
};
