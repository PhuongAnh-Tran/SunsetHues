import dotenv from 'dotenv';
import path from 'path';

// Load the .env file from the current working directory
dotenv.config({ path: path.resolve(process.cwd(), '.env') });
