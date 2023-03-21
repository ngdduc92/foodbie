pipeline {
    agent any

    tools {nodejs "NODEJS"}

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                echo 'Install successfully'
                sh 'npm run build'
                echo 'Build successfully'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run start'
                echo 'Start successfully'
            }
        }
    }
}
