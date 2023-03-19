pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm build'
                echo 'Building NextJS App'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm start'
                echo 'Building NextJS App'
            }
        }
    }
}
