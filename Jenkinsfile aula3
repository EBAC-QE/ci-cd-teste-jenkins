pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('Instalação das dependencias') {
            steps {
                echo 'Instalando os pacotes node...'
                sh 'npm install'
            }
        }
        
        stage('Rodar testes Cypress') {
            parallel {
                stage('pasta 1') {
                    steps {
                        sh 'npm run test-started'
                    }
                }
                stage('pasta 2') {
                    steps {
                        sh 'npm run test-advanced'
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Build e testes executados com sucesso'
        }
        failure {
            echo 'Falha na execução do pipeline'
        }
    }
}

