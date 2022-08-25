import { join } from 'path';
import telescope from '@osmonauts/telescope';

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '/../src/codegen');

telescope({
    protoDirs,
    outPath,
    options: {
        tsDisable: {
            files: [
                'google/protobuf/descriptor.ts',
                'ibc/core/types/v1/genesis.ts'
            ],
            patterns: [
                '*.amino.ts'
            ]
        },
        prototypes: {
            typingsFormat: {
                useDeepPartial: false,
                useExact: false,
                duration: 'duration',
                timestamp: 'date'
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