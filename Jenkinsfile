pipeline {
    agent any

    tools {nodejs "19.8.1"}

    stages {
        stage('Build') {
            steps {
                sh: 'npm install --global yarn'
                echo: 'Install yarn successfully'
                sh 'yarn install'
                echo 'Install successfully'
                sh 'yarn build'
                echo 'Build successfully'
            }
        }
        stage('Deploy') {
            steps {
                sh 'yarn start'
                echo 'Start successfully'
            }
        }
    }
}
