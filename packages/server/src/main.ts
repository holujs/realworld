import { RestApplication } from '@holu/rest';
import { AppModule } from './app/app.module.js';

const app = await RestApplication.create(AppModule, { path: 'api' });
app.server.listen(+process.env.WEBPORT!, process.env.WEBHOST, () =>
  console.log(`cold-start: ${(process.uptime() * 1000).toFixed(2)} ms`)
);
