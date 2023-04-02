pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "sudo docker build -t foobbie:0.0.1 ."
                echo 'Build successfully'
            }
        }
        stage('Deploy') {
            steps {
                sh "sudo docker run -p 3000:3000 foobbie:0.0.1 ."
                echo 'Start successfully'
            }
        }
    }
}
