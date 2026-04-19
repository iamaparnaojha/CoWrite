'use client'

import React from 'react'
import { useTheme } from '@/app/ThemeProvider'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-10 h-10 flex items-center justify-center hover:bg-dark-300 transition-colors"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default ThemeToggle
