
import React, { useEffect, useRef, useState } from 'react'
import { upload } from "@spheron/browser-upload";
function FetchListting() {
    // const [Listing, setListing] = useState([]);

    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [uploadLink, setUploadLink] = useState("");
    const [dynamicLink, setDynamicLink] = useState("");
  
    useEffect(() => {
      const fetchData = async () => {
        // const response = await fetch('/api/newapi');
        // const json = await response.json();

        // setListing(json);
      };
  
      fetchData();
    }, []);


    const handleUpload = async () => {
        if (!file) {
          alert("No file selected");
          return;
        }
    
          try {
            // setIsLoading(true);
            const response = await fetch("/api/newapi");
            const responseJson = await response.json();
            const uploadResult = await upload([file], {
              token: responseJson.uploadToken,
            });
    
            console.log('the resp',responseJson)
            setUploadLink(uploadResult.protocolLink);
            setDynamicLink(uploadResult.dynamicLinks[0]);
          } catch (err) {
            alert(err);
          } finally {
            // setIsLoading(false);
          }
      }; 
      const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files ? event.target.files[0] : null;
        setFile(selectedFile);
        setUploadLink("");
        setDynamicLink("");
      };
    
      const handleSelectFile = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };
    return (
        <div className="App">
        <header className="App-header">
         
  
          {isLoading ? (
            <>Uploading...</>
          ) : (
            <>
              <p>Upload Content to IPFS</p>
              <div className="flex gap-32">
                <div className="">
                  <div
                    className="button-con button-53"
                    onClick={handleSelectFile}
                  >
                    Select File
                    <input
                      id="file"
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="w-full h-full"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="flex-1 flex items-center pl-4 text-sm -rotate-2">
                    {file ? file?.name : "No file selected"}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div
                    className="button-con button-53 h-12"
                    onClick={handleUpload}
                  >
                    Upload
                  </div>
                  {uploadLink && (
                    <a
                      className="text-sm mt-4 -rotate-2"
                      href={uploadLink}
                      target="__blank"
                    >
                      {uploadLink}
                    </a>
                  )}
                  {dynamicLink && (
                    <a
                      className="text-sm mt-4 -rotate-2"
                      href={`https://${dynamicLink}`}
                      target="__blank"
                    >
                      {dynamicLink}
                    </a>
                  )}
{dynamicLink}

                </div>
              </div>
            </>
          )}
        </header>
      </div>
    );
  }

export default FetchListting;
