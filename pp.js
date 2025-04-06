const axios = require("axios");
const https = require("https");

const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZ4TzZwaHd0VGZZS2w4NUdQaUJKNlJ2TVV3Sk9tRm9aaHJHN09mTWpZRE0ifQ.eyJpc3MiOiJrdWJlcm5ldGVzL3NlcnZpY2VhY2NvdW50Iiwia3ViZXJuZXRlcy5pby9zZXJ2aWNlYWNjb3VudC9uYW1lc3BhY2UiOiJrdWJlLXN5c3RlbSIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VjcmV0Lm5hbWUiOiJmdWxsLWFjY2Vzcy1zYS10b2tlbiIsImt1YmVybmV0ZXMuaW8vc2VydmljZWFjY291bnQvc2VydmljZS1hY2NvdW50Lm5hbWUiOiJmdWxsLWFjY2Vzcy1vbmQiLCJrdWJlcm5ldGVzLmlvL3NlcnZpY2VhY2NvdW50L3NlcnZpY2UtYWNjb3VudC51aWQiOiJiM2ZhN2FhYi1lY2Q5LTQ3ZTctYmFjZS0yYzZlZTBmM2ViZjMiLCJzdWIiOiJzeXN0ZW06c2VydmljZWFjY291bnQ6a3ViZS1zeXN0ZW06ZnVsbC1hY2Nlc3Mtb25kIn0.euYV1IdG5StUbesT1Yh7tHkrkJujvomWUSbwh-ldeKq_5QqYnoI3eFX1WIlQHjLWomjEKcGVk2ztXDFa-gyQxKtDTdEeZ9rdiVHOnMCyRRFfnnAPgx9auVjUijB2pVJlIlGtdVdInMOUy0hlvdYaEb2JrYsjMyVUr99PhkOX97kD2RyOkb0iIEhURHQBdonNBi-zEueDhf9ZmE9JYQaM76XrbyTQkQSJlO9Jv3XJAHfIw0Nk25hwKSfWhgKx8jU6IMjcsWRC9kMjRwHPhsCrt2Fru6UOTObOPyb2-XdhPdC07o-_KnyrFZbyyIWzP5WXBBjs_aDau9lVY0RoVTX2SA";

async function deleteDeployments() {
  try {
    const res = await axios.get(
      // 'https://192.175.53.200:6443/api/v1/namespaces/default/services',
      //  "https://192.175.53.200:6443/apis/networking.k8s.io/v1/namespaces/default/ingresses",
      "https://192.175.53.200:6443/apis/apps/v1/namespaces/default/deployments",
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
      }
    );
    
    const deployments = res.data.items;
    for (const deployment of deployments) {
      const deploymentName = deployment.metadata.name;
      
      try {
        if(deploymentName!="llama-2-7b-chatbyom-b5e90a9e2fa3475-ingress"){
        await axios.delete(
          `https://192.175.53.200:6443/apis/apps/v1/namespaces/default/deployments/${deploymentName}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
            httpsAgent: new https.Agent({ rejectUnauthorized: false })
          }
        );
        console.log(`Deleted deployment: ${deploymentName}`);
    }
      } catch (deleteError) {
        console.error(`Failed to delete deployment ${deploymentName}:`, deleteError.message);
      }
    }
  } catch (error) {
    console.error("Failed to fetch deployments:", error.message);
  }
}

deleteDeployments();
