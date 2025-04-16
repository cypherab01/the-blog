"use client";

import { BlogTagsPicker } from "@/components/blog-tags-picker";
import QuillEditor from "@/components/QuillEditor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadDropzone } from "@/utils/uploadthing";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useActionState, useState } from "react";
import { toast } from "sonner";
import { handlePostSubmitServerAction } from "../actions/post/handlePostSubmitServerAction";
import { cn } from "@/lib/utils";

const CreateBlogPost = () => {
  const [editorValue, setEditorValue] = useState<string>("");

  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const [image, setImage] = useState<string | null>(null);

  const [imageUploading, setImageUploading] = useState<boolean>(false);

  const [state, action, isPending] = useActionState(
    handlePostSubmitServerAction,
    { error: null, success: false }
  );

  const handleEditorChange = (value: string) => {
    setEditorValue(value);
  };

  // Callback function to handle the selected tags from the child
  const handleTagSelection = (tags: string[]) => {
    setSelectedTags(tags);
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(editorValue);
  // };

  const handleImageReset = () => {
    setImage(null);
  };

  return (
    <section className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold tracking-tight mb-4">Post Blog</h1>

      <div className="form-container">
        <form action={action} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="block text-sm font-medium">
              Title
            </Label>
            <Input
              id="title"
              name="title"
              required
              // defaultValue={state.title}
              placeholder="Enter your blog title"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <Label htmlFor="image" className="block text-sm font-medium">
              Cover Image
            </Label>
            <UploadDropzone
              config={{ mode: "auto" }}
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                setImage(res[0].ufsUrl);
                toast.success("Image uploaded successfully");
                console.log("Files: ", res);
                setImageUploading(false);
              }}
              onUploadError={(error: Error) => {
                toast.error(`ERROR! ${error.message}`);
                setImageUploading(false);
              }}
              onUploadBegin={(name) => {
                // toast.info("Uploading image...");
                setImageUploading(true);
              }}
              onUploadProgress={(progress) => {
                console.log("Progress: ", progress);
                toast.info(`Uploading image... ${progress}%`);
              }}
            />
            <input type="hidden" name="image" value={image || ""} />
          </div>

          {image && (
            <div className="space-y-2">
              <div>
                <Label htmlFor="image" className="block text-sm font-medium">
                  Preview
                </Label>
                <p className="text-muted-foreground text-sm">
                  <sup className="text-red-500">*</sup> The image quality is
                  slightly compressed.
                </p>
              </div>
              <div className="image-container relative rounded-md">
                <div>
                  <Image
                    src={image}
                    alt="Uploaded Image"
                    width={200}
                    height={50}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className="cross absolute top-0 right-0 bg-background shadow-md p-1 z-10 cursor-pointer"
                  onClick={handleImageReset}
                >
                  <X />
                </div>
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="tags" className="block text-sm font-medium">
              Select Related Topics
            </Label>
            <BlogTagsPicker
              selectedTags={selectedTags}
              onTagSelection={handleTagSelection}
            />
            <input type="hidden" name="tags" value={selectedTags} />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Description</label>
            <QuillEditor value={editorValue} onChange={handleEditorChange} />
            <input type="hidden" name="description" value={editorValue} />
          </div>

          <button
            type="submit"
            className={cn(
              "cursor-pointer w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md",
              imageUploading || isPending ? "opacity-50 cursor-not-allowed" : ""
            )}
            disabled={imageUploading || isPending}
          >
            Submit
          </button>
        </form>
        {/* TODO: remove later */}
        <div className="h-10"></div>
      </div>
    </section>
  );
};
export default CreateBlogPost;
