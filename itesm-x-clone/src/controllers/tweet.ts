import { getNumbersFromDB } from '../db/db';

class TweetController {
  async getAllTweets(): Promise<number[]> {
    const numbers = getNumbersFromDB();
    
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    return evenNumbers;
  }

  
}

export default TweetController;