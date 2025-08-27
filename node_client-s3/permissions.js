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

import { S3Client, PutBucketPolicyCommand } from "@aws-sdk/client-s3";
import fs from "fs";

const s3 = new S3Client({
    region: "us-east-1"
})


const PUBLIC_POLICY_STR = fs.readFileSync("./public_policy.json", "utf-8");
const BUCKET_NAME = "20250826-iago-catlostandfoundwebsite"

async function addPublicBucketPolicy(){
    try {
        const params = {
            Bucket: BUCKET_NAME,
            Policy: PUBLIC_POLICY_STR
        };
        const data = await s3.send(new PutBucketPolicyCommand(params));
        console.log("Política enviada:", data);
    } catch (e) {
        console.log("Erro ao criar política de bucket:", e);
    }
};

addPublicBucketPolicy();