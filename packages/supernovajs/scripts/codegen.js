import { join } from 'path';
import telescope from '@osmonauts/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '/../src/proto');

telescope({
    protoDirs,
    outPath,
    options: {
        prototypes: {
            typingsFormat: {
                duration: 'duration',
                timestamp: 'date',
                useExact: false
            }
        },
        aminoEncoding: {
            enabled: false
        },
        lcdClients: {
            enabled: true
        },
        rpcClients: {
            enabled: true,
            camelCase: true
        }
    }
}).then(()=>{
    console.log('✨ all done!');
}).catch(e=>{
    console.error(e);
    process.exit(1);
});