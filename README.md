## Task description

1. The multi-stage builds approach was used for writing dockerfile. Dependencies were installed in the first stage, dependencies from the first stage were copied in the second stage and the others files of the application were copied.
2. Dockerfile has been checked by the hadolint linter for common errors.
3. The image is created and uploaded to dockerhub.
4. Helm chart was written for this application.
From values there is a possibility:
- change the number of replicas
- specify the repository, name and tag of the image
- change the Security context
- change Horizontal Pod Autoscaling
- modify PodDisruptionBudget
5. Manifests were written for prometheus, grafana, alertmanager for the next deployment in Kubernetes. 
6. Prometheus is configured to collect metrics from a test application.
7. A dashboard has been created in grafana with graphs based on the metrics of the test application.
8. A telegram bot and a telegram group were created. The bot has been added to the group.
9. Alerts was added in prometheus to the metrics of the test application. Alerts are sent to the telegram group according to the specified rules.

## Application Description

The server has 2 endpoints:
/ - returns the random delay time of the request
/metrics - returns metrics

Installing dependencies:
```bash
npm install
```

Launching the application:
```bash
npm start
```

Open the app:
```bash
open http://localhost:8080/
```
Metrics are located on the route `/metrics`:
```bash
curl http://localhost:8080/metrics
```

You can quickly fill metrics with data by periodically accessing the path "/":

```bash
while sleep 0; do curl 127.0.0.1:8080; echo ""; done

