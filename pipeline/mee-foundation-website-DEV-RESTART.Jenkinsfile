pipeline {
    agent any
    options { disableConcurrentBuilds() }
    environment {
        TAG = 'dev'
        NAME = 'mee-foundation-website'
    }

    stages {

        stage('Restart svc') {
            steps {
                echo 'Restart service'
                sh 'sleep 30'
                sh 'oci ce cluster create-kubeconfig --cluster-id $OKE_DEV --region us-ashburn-1 --token-version 2.0.0  --kube-endpoint PRIVATE_ENDPOINT'
                sh '''
                   kubectl -n dev patch deployment mee-foundation-website -p "{\\\"spec\\\": {\\\"template\\\": {\\\"metadata\\\": { \\\"labels\\\": { \\\"redeploy\\\": \\\"$(date +%s)\\\"}}}}}"
                '''
            }
        }
    }

}
