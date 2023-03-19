pipeline {
    agent any

    tools {nodejs "NODEJS"}

    stages {
        stage('Build') {
            steps {
                sh 'npm run install'
                sh 'npm run build'
                echo 'Building NextJS App'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run start'
                echo 'Building NextJS App'
            }
        }
    }
}
