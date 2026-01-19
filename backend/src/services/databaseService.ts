import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../../data');

export class DatabaseService {
    private async ensureDataDir() {
        try {
            await fs.access(DATA_DIR);
        } catch {
            await fs.mkdir(DATA_DIR, { recursive: true });
        }
    }

    async save(collection: string, data: any) {
        await this.ensureDataDir();
        const filePath = path.join(DATA_DIR, `${collection}.json`);
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    }

    async load(collection: string): Promise<any> {
        await this.ensureDataDir();
        const filePath = path.join(DATA_DIR, `${collection}.json`);
        try {
            const content = await fs.readFile(filePath, 'utf-8');
            return JSON.parse(content);
        } catch {
            return null;
        }
    }
}

export default new DatabaseService();
