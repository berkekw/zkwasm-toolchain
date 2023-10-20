import fs from 'node:fs'
import path from 'node:path'

let pub = "0x14:i64 0xa60ecf32309539dd84f27a9563754dca818b815e:bytes-packed"

let pri = "0xdc5:i64 0xf902040183012f5eb9010000000000000000000000000001000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000000000100000000000001000000000000000000000000000000004000000400000000008000000000000000000000000000000400020000400000000000000100000000000000000000000000000008000040000000000000000000000000020000000000000000000000000000020000000000000000000000000000000000000000000040000000000000000000000000008000000000000000200000000000000000000000000000000000000000008000000000000002000000000800000000000f8faf89c945c7a6cf20cbd3eef32e19b9cad4eca17c432a794f884a092e98423f8adac6e64d0608e519fd1cefb861498385c6dee70d58fc926ddc68ca000000000000000000000000000000000000000000000000000000000546d76e0a0000000000000000000000000000000000000000000000000000000000000052ca0000000000000000000000000f28e3d6e64cd5ae909177ea99ecac63755ca978f80f85a945c7a6cf20cbd3eef32e19b9cad4eca17c432a794f842a0fe25c73e3b9089fac37d55c4c7efcba6f04af04cebd2fc4d6d7dbb07e1e5234fa000000000000000000000000000000000000000000000140e13a660cf07ec000080f902a2018302fd59b9010000000000000000000000000001000000000000000000000000000000008000400000000000000000000000000000000000000000000200000000000000000000100080000000000000000000000000000000000000000004000000400000000000000000000000000000000000000000400020000400000000000000100000000000000000000000000000008000040000000480000000000000000020000000000000080000020000000000000000100000000000000000000000000000000000000000000000000000000000000008000000000000000200000000000000000000000000000000000000000000000000000000000000000000800000000004f90197f89c945c7a6cf20cbd3eef32e19b9cad4eca17c432a794f884a092e98423f8adac6e64d0608e519fd1cefb861498385c6dee70d58fc926ddc68ca000000000000000000000000000000000000000000000000000000000546d76e0a0000000000000000000000000000000000000000000000000000000000000052ca000000000000000000000000038dc84830b92d171d7b4c129c813360d6ab8b54e80f89b945c7a6cf20cbd3eef32e19b9cad4eca17c432a794f863a00559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5fa000000000000000000000000000000000000000000000000000000000546d76e0a0000000000000000000000000000000000000000000000000000000000000052ca00000000000000000000000000000000000000000000000000000000063709020f85a945c7a6cf20cbd3eef32e19b9cad4eca17c432a794f842a0fe25c73e3b9089fac37d55c4c7efcba6f04af04cebd2fc4d6d7dbb07e1e5234fa000000000000000000000000000000000000000000000140e05c5aa1b6088000080f902a2018306944eb90100000000200000080000020000010000000000000000000000000000000080000000000a0000000000000000000000008000000000000200000000000000000000100000000000000000000000000000000000000000000004000000400000000000000000000000000000000000000000400020000400000000000000100000000000000000000000000000008000040000000480000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000008000000000000000200000000000001000000000000000000000000000002000000000000000000000000800000000000f90197f89c945c7a6cf20cbd3eef32e19b9cad4eca17c432a794f884a092e98423f8adac6e64d0608e519fd1cefb861498385c6dee70d58fc926ddc68ca000000000000000000000000000000000000000000000000000000000542e7210a0000000000000000000000000000000000000000000000000000000000000052ca00000000000000000000000005b942fcd936702a00df9277bae624f8b6da9e2b380f89b945c7a6cf20cbd3eef32e19b9cad4eca17c432a794f863a00559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5fa000000000000000000000000000000000000000000000000000000000546d76e0a0000000000000000000000000000000000000000000000000000000000000052ca00000000000000000000000000000000000000000000000000000000063709020f85a945c7a6cf20cbd3eef32e19b9cad4eca17c432a794f842a0fe25c73e3b9089fac37d55c4c7efcba6f04af04cebd2fc4d6d7dbb07e1e5234fa000000000000000000000000000000000000000000000140df7e4f367b924000080f906710183092e67b9010000200000000150000000000080008000000000010000000000000010000000000000000000000000000000000000000000000000000000000002000000800000000000000000000000000008000000200000000000000000000000000000000000000000000080000000000000000000000000000000000000000010000000000001000200000000000000000000000000000000001004081002004000000000000000000000000000000000000000000000000000000000000400040000000000100002000000010000004000000000000000000000001020000000000000000000000000000000000000000000000000000000000000000000000000000000f90566f89b945da20e7c65d4e7419fcedb0027e561bc235fe8e5f863a0ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa0000000000000000000000000ab00f1f645dd29e7a43e90dcf91b3af7b7505972a000000000000000000000000033b47b485d56facb821442f504edd93efafa6b03a000000000000000000000000000000000000000000000025b934a198a2f380000f89b945da20e7c65d4e7419fcedb0027e561bc235fe8e5f863a0ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa000000000000000000000000033b47b485d56facb821442f504edd93efafa6b03a0000000000000000000000000a60ecf32309539dd84f27a9563754dca818b815ea000000000000000000000000000000000000000000000025b934a198a2f380000f89b940e7a6d3796149933bd75bbae38904e38b1c09516f863a0ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa0000000000000000000000000a60ecf32309539dd84f27a9563754dca818b815ea000000000000000000000000033b47b485d56facb821442f504edd93efafa6b03a0000000000000000000000000000000000000000000000004d4b01c4d1ba63c37f89b940e7a6d3796149933bd75bbae38904e38b1c09516f863a0ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa000000000000000000000000033b47b485d56facb821442f504edd93efafa6b03a0000000000000000000000000ab00f1f645dd29e7a43e90dcf91b3af7b7505972a0000000000000000000000000000000000000000000000004cadd18cc6a441b29f87994a60ecf32309539dd84f27a9563754dca818b815ee1a01c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1b84000000000000000000000000000000000000000000000068f1888e6eb7036fffe00000000000000000000000000000000000000000003336530047e5ec3da40c0f8fc94a60ecf32309539dd84f27a9563754dca818b815ef863a0d78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822a000000000000000000000000033b47b485d56facb821442f504edd93efafa6b03a000000000000000000000000033b47b485d56facb821442f504edd93efafa6b03b880000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025b934a198a2f380000000000000000000000000000000000000000000000000004d4b01c4d1ba63c370000000000000000000000000000000000000000000000000000000000000000f87994ab00f1f645dd29e7a43e90dcf91b3af7b7505972e1a01c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1b840000000000000000000000000000000000000000000000251d7875e5c35472e4d0000000000000000000000000000000000000000000122aa1472d5f40ca20000f8fc94ab00f1f645dd29e7a43e90dcf91b3af7b7505972f863a0d78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822a000000000000000000000000033b47b485d56facb821442f504edd93efafa6b03a000000000000000000000000033b47b485d56facb821442f504edd93efafa6b03b880000000000000000000000000000000000000000000000004cadd18cc6a441b290000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000025b934a198a2f380000:bytes-packed 0x70:i64 0x100100002701000048010000690100008a010000ab01000000000000180300002f030000500300007103000092030000b303000000000000bd050000d4050000f505000016060000370600005806000000000000d60a0000ec0a00000000000000000000000000000e0b000040000000:bytes-packed"

import { Mock as mock } from "../../zkwasm_mock/mock.js"

let wasmPathFromProjRoot = 'tests/mock/wasm/zkgraph_full.wasm'

const projectRoot = process.cwd()
const wasmPath = path.join(projectRoot, wasmPathFromProjRoot)
const wasm = fs.readFileSync(wasmPath)
const wasmUint8Array = new Uint8Array(wasm)

let result = await mock.dryrun(wasmUint8Array, pri, pub)

console.log("zkWASM Dryrun Result:", result)