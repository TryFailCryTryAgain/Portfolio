
interface Commands {
    command: string,
    description: string,
}


export const Commands: Commands[] = [
    {
        command: "cd <path>",
        description: "Change the current directory",
    },
    {
        command: "ls",
        description: "List contents of the current directory"
    },
    {
        command: "mkdir <name>",
        description: "Create a new folder"
    },
    {
        command: "tocuh <name>",
        description: "Create a new empty file"
    },
    {
        command: "cat <name>",
        description: "Print the contents of a file"
    },
    {
        command: "echo <text> < <file>",
        description: "Write text to a file or directly output it into the terminal"
    },
    {
        command: "rm <name>",
        description: "Delete a file or empty folder"
    },
    {
        command: "pwd",
        description: "Print the current directory path"
    },
    {
        command: "preview <file>",
        description: "Open an HTML file's contents in a live preview window"
    },
    {
        command: "help <command>",
        description: "List all commands, or show detail on one"
    }
]