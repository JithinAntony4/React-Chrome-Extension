let fs = require('fs');
const path = require('path');

class InlineMigrate {
    private readonly srcPath: string
    private destPath: string

    constructor(srcPath: string, destPath: string) {
        this.srcPath = srcPath;
        this.destPath = destPath;
    }

    openSourceFile(): Promise<Buffer> {
        return new Promise((resolve, reject) => {
            fs.readFile(this.srcPath, (err: Error, data: Buffer) => {
                if (err)
                    reject(err.message)
                resolve(data)
            })
        })
    }
}

const init = async () => {
    let inlineMigrate = new InlineMigrate(path.join(__dirname, '../dist/chrome/index.html'),
        path.join(__dirname, '../dist/chrome/index.js'));

    let buffer = await inlineMigrate.openSourceFile();
    let content = buffer.toString("utf8");


}
