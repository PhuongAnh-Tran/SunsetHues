import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });
console.log('TEST_VAR:', process.env.TEST_VAR);
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);
