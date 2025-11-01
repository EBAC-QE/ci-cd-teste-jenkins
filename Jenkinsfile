pipeline {
    agent any
    tools { nodejs "nodejs" }

    environment {
        API_REPO = "https://github.com/EBAC-QE/hub-de-leitura-api.git"
        TEST_REPO = "https://github.com/EBAC-QE/hub-de-leitura-api-teste.git"
        API_DIR = "hub-de-leitura-api"
        TEST_DIR = "hub-de-leitura-api-teste"
    }

    stages {
        stage('Clonar API') {
            steps {
                echo '📥 Clonando repositório da API...'
                sh "git clone ${API_REPO}"
            }
        }

        stage('Instalar dependências da API') {
            steps {
                dir("${API_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Subir servidor da API') {
            steps {
                dir("${API_DIR}") {
                    // inicia o servidor em background
                    sh 'nohup npm start &'
                }
                // pequena espera para o servidor subir
                sh 'sleep 8'
            }
        }

        stage('Clonar projeto de testes') {
            steps {
                echo '📥 Clonando repositório de testes...'
                sh "git clone ${TEST_REPO}"
            }
        }

        stage('Instalar dependências dos testes') {
            steps {
                dir("${TEST_DIR}") {
                    sh 'npm ci'
                }
            }
        }

        stage('Rodar testes automatizados') {
            steps {
                dir("${TEST_DIR}") {
                    sh 'npx cypress run'
                }
            }
        }
    }

    post {
        always {
            echo '🧹 Finalizando pipeline e encerrando processos Node...'
            sh "pkill -f 'node' || true"
        }
        success {
            echo '✅ Testes executados com sucesso!'
        }
        failure {
            echo '❌ Falhas detectadas durante os testes.'
        }
    }
}
