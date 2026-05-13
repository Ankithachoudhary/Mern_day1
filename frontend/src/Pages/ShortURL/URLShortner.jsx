import React, { useEffect, useState } from 'react'
import { Button, Stack, TextInput } from '@mantine/core';
import Service from '../../utils/http';


const URLShortener = () => {
   const service = new Service();
   const [data, setData] = useState({});
   const [shortUrl, setShortUrl] = useState("");
   const handleSubmit = async () => {
       try {
           console.log(data);
           const response = await service.post("s",data);
           console.log(response);
           setShortUrl("https://localhost:5173/api/s" +response.shortCode);
       } catch (error) {
           console.error("POST API call failed!", error.message);
       }
   }
   const onChange = (event) => {
    setData({ ...data,originalUrl: event.target.value
    });
 }
   useEffect(() => {
       console.log(`Short URL is: ${shortUrl}`);
   }, [shortUrl])

  return (
    <>
    {shortUrl && shortUrl.length > 0 ?
            <p>{shortUrl}</p>  :
            (
    <Stack>
    <TextInput
      size="md"
      radius="lg"
      label="Original URL"
      withAsterisk
      onChange={onChange}
      placeholder="Enter Original URL"
    />
    <TextInput
      size="md"
      radius="lg"
      label="Customize your link ( Optional )"
      onChange={onChange}
      placeholder="Enter to customize your link"
    />
     <TextInput
      size="md"
      radius="lg"
      label="Title( Optional )"
      onChange={onChange}
      placeholder="Enter title"
    />
    <Button variant="filled" size="md" onClick= {handleSubmit} onChange={onChange}> Submit
        </Button>;
    </Stack>
  )
}

</>
  )
}

export default URLShortener