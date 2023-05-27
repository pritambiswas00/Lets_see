import { platform, cpus } from "node:os";
import { join } from "path"
import { readdir, mkdir, rename, unlink, rmdir, copyFile, access } from "fs/promises";

export enum WDirectory {
    "A"
}


export class SystemFunction {

    static async readDirectory(path: string): Promise<string[]> {
        try {
            const files = await readdir(path);
            return files;
        } catch (error) {
            console.error('Error reading directory:', error);
            return [];
        }
    }

    // Create a new folder
    static async createFolder(path: string, folderName: string): Promise<void> {
        try {
            const newPath = join(path, folderName);
            await mkdir(newPath);
        } catch (error) {
            console.error('Error creating folder:', error);
        }
    }

    // Copy a file
    static async copyFile(source: string, destination: string): Promise<void> {
        try {
            await copyFile(source, destination);
        } catch (error) {
            console.error('Error copying file:', error);
        }
    }

    // Rename a file or folder
    static async renameItem(oldPath: string, newPath: string): Promise<void> {
        try {
            await rename(oldPath, newPath);
        } catch (error) {
            console.error('Error renaming item:', error);
        }
    }

    // Delete a file
    static async deleteFile(path: string): Promise<void> {
        try {
            await unlink(path);
        } catch (error) {
            console.error('Error deleting file:', error);
        }
    }

    // Delete an empty folder
    static async deleteFolder(path: string): Promise<void> {
        try {
            await rmdir(path);
        } catch (error) {
            console.error('Error deleting folder:', error);
        }
    }
    
    static async getAvailableDrives(): Promise<string[]> {
        const drives = [];

        // Get the root directory of each drive
        const rootDirectories = platform() === "win32" ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "/";
        for (const drive of rootDirectories) {
            const rootPath = drive + ":/";
            try {
                await access(rootPath);
                drives.push(rootPath);
            } catch (error) {
                console.log(error)
                // Drive does not exist or is not accessible
            }
        }

        return drives;
    }
}