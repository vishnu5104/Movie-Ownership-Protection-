import { SpheronClient, ProtocolEnum } from "@spheron/storage";
import { NextResponse } from "next/server";

export default async function handler(req,res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const bucketName = "example-browser-upload"; // use your preferred name
    const protocol = ProtocolEnum.IPFS; // use your preferred protocol
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlLZXkiOiI4MzMyYThlZDEyNDIzZmE4ZDRlOTUxMmE5NzU1MDUwODc4YmY2NzUxNzgwNjI0ODYxNTFmMmY2NGE3NWRkZjE2MmQ5Y2E2OWFjNDNmNmQ2YWZiMDEwMjJiMzRhODdjYzY4MzZjMjM3Mjk2NDdlN2EwYjE1OTIwM2RjZTI3ZmVmYiIsImlhdCI6MTY5NzgzODU1MywiaXNzIjoid3d3LnNwaGVyb24ubmV0d29yayJ9.JL0W45lateleCBK9cQrUysCnDqQ3Nb7koVkKXYggEyc'; // add your access token in .env or paste it here

    const client = new SpheronClient({ token });
    // console.log('the client',client)

    const { uploadToken } = await client.createSingleUploadToken({
      name: bucketName,
      protocol,
    });

    res.status(200).json({
      uploadToken,
    });
  } catch (error) {
    console.error('the error',error);
    res.status(500).json({ error: 'Server Error' });
  }
}
