import { question } from 'readline-sync';

async function run() {
  while(true) {
    const input = question('>');
    console.log(`You input ${input}`);
  }
}

run().then();