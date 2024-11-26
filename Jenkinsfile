pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/eshaq170/BirthdayMessageApp.git'
            }
        }
       stage('Install Dependencies') {
    steps {
            sh 'npm install'
        }
}
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Application') {
            steps {
                sh 'npm run build || echo "No build step defined"'
            }
        }
        stage('Dockerize') {
            steps {
                sh '''
                docker build -t birthday-app .
                docker run -d -p 3000:3000 birthday-app
                '''
            }
        }
    }
    post {
        success {
            echo 'CI/CD pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
