const favoriteColor = process.env.FAVORITE_COLOR;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`My favorite color is ${favoriteColor}`);
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main()