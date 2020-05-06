require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth payment come harvest glove bubble toy'; 
let testAccounts = [
"0x360d684e79c3d44a45391898bc7419484c5c7f9e9a368785fe9f3c5f58f03310",
"0x3c1a714fcbd6bb72c0c844f6012afca1c3de46dec558cb4dbefb1226dd7f883a",
"0x905e7760107f867e66c2cc72e2dcb4d9f7bef3659c3839780f83dbd411d2dac2",
"0x70fe1518d3d651266dfccd07b3efdee75f3a7162d89e5321d0ddd36f37377a83",
"0xc85c932afb30ff93da5fae94912c8ec66f7bc520818516778fd3a049ed452182",
"0x380ae58fa5862c44dfc3d8cd7bae566b20b3e3735d7c14a1b75532aa534168cc",
"0x4d29fa3533452b01ee0ed2b9a8f07d1277eb783a6f6e894e44e511f77bc30e4e",
"0xd1632441ed3d01b442d519d21060f60a9597c238ba1217e2c83a38cae5d4bae8",
"0x76003967a10e9bb04ecae5ba8061d72a308644953add2dffc95b8478d6bb0943",
"0xaac27eedc897315e68daaedfdfe08c674889d01f407d2340cbd5bab341dde14d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
