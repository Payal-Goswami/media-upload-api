import ImageKit from '@imagekit/nodejs';

const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

export default async (file)=>{
    const response = await client.files.upload({
      file: file.buffer.toString("Base64"), 
      fileName: 'myImage',
    });
    return response;
}