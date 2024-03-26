'use client';

import { FormInput } from '@/app/components';
import FormTextArea from '@/app/components/forms/inputs/FormTextArea';
import LogoXL from '@/app/components/icons/logo/LogoXL';
import UploadProjectNavbar from '@/app/components/navigations/navbar/UploadProjectNavbar';
import postNewPostAction from '@/utils/actions/postNewPostAction';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IImageHeightAndWidth {
  height: number | null;
  width: number | null;
}

const UploadPage = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [imageHeighAndWidth, setImageHeighAndWidth] =
    useState<IImageHeightAndWidth>({
      height: null,
      width: null,
    });

  const clientAction = async (formData: FormData) => {
    try {
      const response = (await postNewPostAction(formData)) as any;

      if (response && response.error) {
        throw new Error(response.error);
      }
      router.push('/');
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];

    // ? Get image height and width and set it to state
    const reader = new FileReader();
    reader.onloadend = () => {
      const image = new Image();
      image.src = reader.result as string;

      image.onload = () => {
        setImageHeighAndWidth({
          height: image.height,
          width: image.width,
        });
      };
    };
    reader.readAsDataURL(file);

    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <form action={clientAction} className="min-h-screen">
      <UploadProjectNavbar />

      <div
        className={`flex flex-col gap-14 items-center justify-center min-h-screen h-full pt-20 p-side ${
          file && 'hidden'
        }`}
      >
        {!file && <h1 className="text-3xl">What do you wanna share ?</h1>}

        <div className={`${file && 'hidden'}`}>
          <label
            htmlFor="image"
            className="flex items-end justify-center border-dotted border-2 border-neutral-300 p-4 w-80 h-80 rounded-3xl cursor-pointer"
          >
            <LogoXL />

            <p className="font-light text-center">
              Simply drop your image here or <br />
              <span className="font-medium">Browse</span>
            </p>
          </label>
          <input
            onChange={handleFileChange}
            id="image"
            name="image"
            type="file"
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>

      <div className={`new-post-grid p-side py-32 ${!file && 'hidden'}`}>
        <div className="new-post-image">
          {preview && imageHeighAndWidth.height && imageHeighAndWidth.width && (
            <NextImage
              src={preview}
              alt="Preview"
              width={imageHeighAndWidth.height}
              height={imageHeighAndWidth.height}
              className="rounded-3xl w-full"
            />
          )}
        </div>

        <div className="new-post-content flex flex-col gap-7 max-[1024px]:pt-14 min-[1024px]:pt-28">
          <FormInput
            label="Title (*)"
            name="title"
            type="text"
            placeholder={'Title'}
          />

          <FormTextArea
            label="DESCRIPTION"
            name="description"
            placeholder={'description'}
          />
        </div>
      </div>
    </form>
  );
};
export default UploadPage;
