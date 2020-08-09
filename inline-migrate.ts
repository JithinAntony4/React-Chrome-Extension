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

    updateSourceFile(content: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.srcPath, content, function (err: NodeJS.ErrnoException) {
                if (err) reject(err);
                resolve('Success')
            });
        })
    }

    writeFile(content: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fs.writeFile(this.destPath, content, function (err: NodeJS.ErrnoException) {
                if (err) reject(err);
                resolve('Success')
            });
        })
    }
}

const init = async () => {
    let inlineMigrate = new InlineMigrate(path.join(__dirname, '../dist/chrome/index.html'),
        path.join(__dirname, '../dist/chrome/index.js'));

    let buffer = await inlineMigrate.openSourceFile();
    let content = buffer.toString("utf8");
    let regExp = new RegExp("\<(script)\>(.*?)\<\/(script)\>");
    let regExpMatchArray = content.match(regExp);
    let replacingWord = regExpMatchArray[2];
    await inlineMigrate.updateSourceFile(content.replace(regExpMatchArray[0], '<script src="index.js"></script>'))
    await inlineMigrate.writeFile(replacingWord)
}
init()
