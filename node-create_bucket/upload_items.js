/*
	Copyright @2019 [Amazon Web Services] [AWS]

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

	    http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import FS from "fs";

const s3 = new S3Client({
    region: "us-east-1"
})

const bucket_name_str = "20250826-iago-catlostandfoundwebsite"


async function uploadItemAsBinary(key_name_str, content_type_str, bin) {
    try {
    	var input = {
            Bucket: bucket_name_str,
            Key: key_name_str,
            ContentType: content_type_str,
            Body: bin
        };
            
        const data = await s3.send(new PutObjectCommand(input));
        console.log("Documento enviado com sucesso:", data)
	} catch (e) {
	    console.error("Error ao enviar documento", e);
	}
}


function init() {
    var cat_pic_bin = FS.readFileSync("./cat.png");
    uploadItemAsBinary("cat.png", "image/png", cat_pic_bin);
    var index_page_bin = FS.readFileSync("./index.html");
    uploadItemAsBinary("index.html", "text/html", index_page_bin);
};


init();