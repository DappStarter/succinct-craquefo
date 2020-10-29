require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remain hour gesture merry flock social'; 
let testAccounts = [
"0xaed0cbfee56f1d2c09d8149ce27beeb459b8c4ee349fa8a31a970a13fa66f066",
"0xe0d64dd4dd59e854e2fa6ea22e991000a859c95a97e259820f8dff41d2890d74",
"0xd748a8e9604f0f905f6790f83f5d8751b7eb8624cdc4d1e9c787bda489146f4d",
"0xcdd87b598d2c93777d79d07243be6a15def51b463394feaedda9ededc6383fee",
"0x55ad4e763677a1bd60b261090c106f1e356a864e8bb2d1392beda424ca667d54",
"0xd62f5857627708c1f371b0192232a07af44800603a3ecfb675e1835b15bffe7c",
"0x907db2ddb3a9378dfd5e6925b5bc947abd68fd17c9ff0ed76a29e008b73353e7",
"0x2cfbd29e0961f52daf5099dff9708957226271ac0e26831cc38373dbbb30e6e3",
"0xe4df10f06a159a4d61ce55a82b1d88061ad8413f6a7e081de66cd8f4f8faef37",
"0xfa5785553d505c55eb55d128c5d61e1ccdd5305c06dbb0de89cde14d974db0e0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
