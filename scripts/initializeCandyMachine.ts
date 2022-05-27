import { BN, AnchorProvider, web3, Wallet, Program } from '@project-serum/anchor'
import {
  Connection,
  PublicKey,
  SystemProgram
} from "@solana/web3.js";
import fs from 'fs'

import { PREFIX } from '../constants'
import { IDL } from './idl'

import tokenUris from './urls.json'

const url = 'https://api.devnet.solana.com'
const options = AnchorProvider.defaultOptions();
const connection = new Connection(url, options.commitment);

const wallet = new Wallet(web3.Keypair.fromSecretKey(
  new Uint8Array(
    JSON.parse(fs.readFileSync(__dirname + '/devnet.json').toString())
  )
))

console.log('wallet:',wallet.publicKey.toString())

const PROGRAM_ID = new PublicKey('7KSeMoygViHpaL2wztV4DenBK4kTdsFbqkiSFwiDxnEU');

const creator1 = new PublicKey('7EGWwj35r6sd4ERZMU2CGoTFL1ZuoUNup8DhxFyr6UPf');
const creator2 = new PublicKey('5j9CpZqxAVpHLk7Zp1y84UuDZ5Yu63mgJuNCxxtwEkWc');
const provider = new AnchorProvider(connection, wallet, options);
const program = new Program(IDL, PROGRAM_ID, provider);
const initializeCandyMachine = async () => {
  const [candyMachine] = await PublicKey.findProgramAddress(
    [Buffer.from(PREFIX)],
    PROGRAM_ID
  )
  let urls = [tokenUris[0], tokenUris[1], tokenUris[2]]
  console.log('url length:',urls)

  const params = {
    price: new BN(10000000),
    nftsMinted: new BN(0),
    goLiveDate: new BN(1640889000),
    creators: [
      { address: creator1, verified: true, share: 50 },
      { address: creator2, verified: true, share: 50 }
    ],
    symbol: 'NUM',
    sellerFeeBasisPoints: 500, // 500 = 5%
    maxSupply: new BN(3),
    tokenUris: urls
  }

  console.log('\n take this address and replace on /constants.ts')
  console.log('\n candyMachine address: ', candyMachine.toBase58())

  const accounts = {
    candyMachine,
    authority1: creator1,
    authority2: creator2,
    systemProgram: SystemProgram.programId
  }

  const tx = await program.methods
    .initializeCandyMachine(params)
    .accounts(accounts)
    .rpc()
  console.log('tx:',tx)
}

export default initializeCandyMachine

initializeCandyMachine()
