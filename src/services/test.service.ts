
export const getAllQuizService = async () => {

   try{
    const response = await fetch(process.env.NEXT_APIURL as string);
    const data = await response.json();
    return data;
   }
   catch(e){
    console.log("Error")
   }
}