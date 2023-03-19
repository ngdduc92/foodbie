pipeline {
    agent any

    tools {nodejs "NODEJS"}

    stages {
        stage('Build') {
            steps {
                sh 'nvm alias default 16'
                sh 'node -v'
                sh 'npm -v'
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
