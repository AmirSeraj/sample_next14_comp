import * as z from "zod";

const MAX_FILE_SIZE = 5242880;
function checkFileType(files: File) {
  // file type checking
  if (files?.[0]?.name) {
    const fileType = files?.[0]?.name.split(".").pop();
    if (["gif", "png", "jpg", "jpeg", "jfif", "webp"].includes(fileType))
      return true;
  }
  return false;
}
export const FormSchema = z.object({
  name: z.string().min(4, {
    message: "Name is required!",
  }),
  email: z.string().email({
    message: "E-mail is required!",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characters required!",
  }),
  confirmPassword: z.string().min(6, {
    message: "Minimum 6 characters required!",
  }),
  title: z.string().min(6, {
    message: "Title is required!",
  }),
  single_image: z
    .any()
    .refine((files) => {
        console.log('files', !files || files.length === 0 || files === undefined)
      return !files || files.length === 0 || files === undefined;
    }, "File is required") // If you also wanna validate if the file exists
    .refine((files) => {
      return files?.[0]?.size <= MAX_FILE_SIZE;
    }, 'Max image size is 5MB.') // file size validation
    .refine(
      (files) => checkFileType(files),
      "Only .jpg, .gif, .png, .jpeg, .jfif and .webp formats are supported."
    ),
});
