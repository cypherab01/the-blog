"use client";

import { BlogTagsPicker } from "@/components/blog-tags-picker";
import QuillEditor from "@/components/QuillEditor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const CreateBlogPost = () => {
  const [editorValue, setEditorValue] = useState<string>("");

  const [image, setImage] = useState<string | null>(null);

  const handleEditorChange = (value: string) => {
    setEditorValue(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(editorValue);
  };

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold tracking-tight mb-4">Post Blog</h1>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="block text-sm font-medium">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter your blog title"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <UploadDropzone
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                setImage(res[0].ufsUrl);
                toast.success("Upload Completed");
                console.log("Files: ", res);
                // alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                toast.error(`ERROR! ${error.message}`);
              }}
            />
          </div>

          <div>
            {image && (
              <Image src={image} alt="Uploaded Image" width={200} height={50} />
            )}
          </div>

          <div>
            <QuillEditor value={editorValue} onChange={handleEditorChange} />
            <Label className="block text-sm font-medium">Related Topics</Label>
            <BlogTagsPicker />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Description</label>
            <QuillEditor value={editorValue} onChange={handleEditorChange} />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default CreateBlogPost;
