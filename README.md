## Realist App Source Code for Individual Lectures

Press `.` on your keyboard to open code editor mode for easy navigation.

#### server `config.js`

```
import SES from "aws-sdk/clients/ses.js";
import S3 from "aws-sdk/clients/s3.js";
import NodeGeocoder from "node-geocoder";

export const DATABASE = "mongodb://127.0.0.1:27017/xxx";

export const AWS_ACCESS_KEY_ID = "xxx";
export const AWS_SECRET_ACCESS_KEY = "xxx/xxx";

export const EMAIL_FROM = '"Name" <xxx@xx.x>';
export const REPLY_TO = "xxx@xx.x";

const awsConfig = {
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
  apiVersion: "2010-12-01",
};
export const AWSSES = new SES(awsConfig);
export const AWSS3 = new S3(awsConfig);

const options = {
  provider: "google",
  apiKey: "xxx",
  formatter: null,
};

export const GOOGLE_GEOCODER = NodeGeocoder(options);

export const JWT_SECRET = "xxx";
export const CLIENT_URL = "http://localhost:3000";

```

#### client `config.js`

```
export const API = "http://localhost:8000/api";
export const GOOGLE_PLACES_KEY = "xxx";
export const GOOGLE_MAPS_KEY = "xxx-xxx";
```
