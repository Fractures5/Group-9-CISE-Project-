import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SuggestArticleForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("journalName")} placeholder="Journal Name" /></p>
      <p><input {...register("pubyear")} placeholder="Year of Publication" /></p>
      <p><input {...register("volume")} placeholder="Volume" /></p> 
      <p><input {...register("volume")} placeholder="Number" /></p> 
      <p><input {...register("pages")} placeholder="Pages" /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>

     
      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programming</option>
        <option value="Mob Programming">Pair Programming</option>
        <option value="Mob Programming">Agile Development</option>
      </select>
      
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SuggestArticleForm;