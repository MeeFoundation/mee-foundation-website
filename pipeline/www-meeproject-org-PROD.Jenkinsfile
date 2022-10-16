pipeline {
    agent any
    options { disableConcurrentBuilds() }

    stages {
        stage('Publish to GH-Pages') {
            steps {
                dir('web') {
                    echo 'Installing dependencies...'
                    sh 'yarn install --frozen-lockfile'
                    echo 'Building ...'
                    sh 'yarn deploy'
                }
            }
        }
    }
}
