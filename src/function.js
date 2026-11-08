const BYTES_IN_KB = 1024;
const MAX_FILE_SIZE = 7 * BYTES_IN_KB * BYTES_IN_KB;
const MIN_FILE_SIZE = 2 * BYTES_IN_KB
const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx', '.png'];

export function showFile(input) {
    if (!input || !Array.isArray(input)) {
        return {
            isValid: false,
            error: 'Input error. Try to attach files again'
        }
    }

    if (input.length === 0) {
        return {
            isValid: false,
            error: "You didn't attach any files. It's obligatory. Add files, please"
        };
    }

    if (input.length > 2) {
        return {
            isValid: false,
            error: "You can attach 2 or less files. Not more."
        };
    }

    for (const file of input) {
        let current = file;

        if (typeof current.name !== 'string') {
            return {
                isValid: false,
                error: 'File name is not a string.'
            }
        }

        if (typeof current.size !== 'number' || Number.isNaN(file.size)) {
            return {
                isValid: false,
                error: 'File size is not a number.'
            }
        }
        
        if (current.size >= MAX_FILE_SIZE) {
            return {
                isValid: false,
                error: `The file ${file.name} is too big. Choose another one`
            };
        }

        if (current.size === 0) {
            return {
                isValid: false,
                error: `The file ${file.name} is empty. Choose another one`
            };
        }

        if (current.size < MIN_FILE_SIZE) {
            return {
                isValid: false,
                error: `The file ${file.name} is too small. Choose another one`
            };
        }

        const filename = current.name.toLowerCase()
        let isValidExtension = ALLOWED_EXTENSIONS.some(ext => filename.endsWith(ext));

        if (!isValidExtension) {
            return {
                isValid: false,
                error: `The extension of the file ${file.name} is wrong. Choose another one`
            };
        }
    }

    return {
        isValid: true,
    };
}

