pipeline {
    agent any
    options { disableConcurrentBuilds() }
    environment {
        TAG = 'dev'
        NAME = 'mee-foundation-website'
    }

    stages {
        stage('BuildUI') {
            steps {
                dir('web') {
                    echo 'Installing dependencies...'
                    sh 'yarn install --frozen-lockfile'
                    echo 'Building ...'
                    sh 'yarn build'
                }
           }
        }

        stage('BuildDockerImage') {
            steps {
                sh 'echo $OCR_PWS | docker login iad.ocir.io  --username $OCR_USER  --password-stdin '
                sh """
                docker build --network=host -t $OCR/$NAME:$BUILD_NUMBER -t $OCR/$NAME:$TAG -t $OCR/$NAME:latest -f Dockerfile  .
                docker push $OCR/$NAME:$BUILD_NUMBER
                docker push $OCR/$NAME:$TAG
                docker push $OCR/$NAME:latest
                """
            }
        }

        stage('Restart svc') {
            steps {
                echo 'Restart service'
                sh 'oci ce cluster create-kubeconfig --cluster-id $OKE_DEV --region us-ashburn-1 --token-version 2.0.0  --kube-endpoint PRIVATE_ENDPOINT'
                sh '''
                   kubectl -n dev patch deployment mee-foundation-website -p "{\\\"spec\\\": {\\\"template\\\": {\\\"metadata\\\": { \\\"labels\\\": { \\\"redeploy\\\": \\\"$(date +%s)\\\"}}}}}"
                '''
            }
        }
    }

}
