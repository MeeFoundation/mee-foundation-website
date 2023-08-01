import { postsPerPage } from "@config";

const getPageNumbers = (numberOfPosts: number) => {
    const numberOfPages = numberOfPosts / Number(postsPerPage);
  
    let pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
      pageNumbers = [...pageNumbers, i];
    }
  
    return pageNumbers;
  };
  
  export default getPageNumbers;
  