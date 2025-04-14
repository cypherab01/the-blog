"use client";

import QuillEditor from "@/components/QuillEditor";
import { blogTags } from "@/constants/blog-tags";
import { useState } from "react";

const CreateBlogPost = () => {
  const [editorValue, setEditorValue] = useState<string>("");

  const handleEditorChange = (value: string) => {
    setEditorValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(editorValue);
  };

  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tight mb-4">Post Blog</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="title">
            <label htmlFor="title">
              Title
              <input type="text" id="title" name="title" />
            </label>
          </div>
          <div className="description">
            <label htmlFor="description">
              Description
              <textarea id="description" name="description" />
            </label>
          </div>
          <div className="tags">
            <label htmlFor="tags">
              Tags
              <select id="tags" name="tags" multiple>
                {blogTags.map((tag) => (
                  <option key={tag.value} value={tag.value}>
                    {tag.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <QuillEditor value={editorValue} onChange={handleEditorChange} />

          <button type="submit" className="btn-primary">
            Submit
          </button>
          <div className="h-32"></div>
        </form>
      </div>
    </section>
  );
};
export default CreateBlogPost;
