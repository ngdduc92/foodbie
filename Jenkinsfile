pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "sudo ./stopByPort.sh 3000"
                sh "docker build -t foobbie:0.0.1 ."
                echo 'Build successfully'
            }
        }
        stage('Deploy') {
            steps {
                sh "docker run -p 3000:3000 foobbie-deploy::0.0.1 ."
                echo 'Start successfully'
            }
        }
    }
}
