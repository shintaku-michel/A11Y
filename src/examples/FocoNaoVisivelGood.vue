<script setup lang="ts">
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
            <a href="#main-content" class="skip-link">Pular para o conteúdo principal</a>
            <header class="header">HEADER</header>

            <main class="main mt-4" id="main-content" tabindex="-1">
                <h1>Conteúdo Principal</h1>
                <section aria-labelledby='region1'>
                    <h2 id='region1'>Dicas de uso adequado de foco</h2>
                    <div class="mt-8">
                        <h3>Exemplo link</h3>
                        <a href="www.google.com" target="_blank" class="btn-custon-link mr-4">LINK</a>
                        <h3>Exemplo botão</h3>
                        <button class="btn-custom mr-4" type="button">
                            Enviar
                        </button>
                        <h3>Exemplo entrada de dados</h3>
                        <div class="flex flex-col">
                            <label id="first-name" for="fn">Primeiro nome</label>
                            <input type="text" name="fn" placeholder="Digite o seu primeiro nome" class="input-custom"
                                aria-labelledby="first-name">
                        </div>
                    </div>
                </section>
            </main>
        </div>

        <aside class="flex flex-col px-8 mt-10">
            <div class="px-4 py-2 bg-amber-200">
                <h2 class="uppercase m-0 p-0">Verificações</h2>
            </div>
            <div class="flex flex-col justify-items-start bg-amber-100">
                <ul>
                    <li class="flex p-2">
                        <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
                        Uso de elemento focável visível
                    </li>
                    <li class="flex p-2">
                        <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
                        Link diferenciado do texto pela cor e outro estilo
                    </li>
                    <li class="flex p-2">
                        <img src="/src/assets/icons/g-check.svg" alt="" class="h-6 w-6">
                        Campo de entrada de texto com outline visível
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<style scoped>
.header {
    font-size: 2rem;
    font-weight: bold;
    color: #07648d;
    border: solid 1px #07648d;
    padding: 0 1rem;
}

.nav {
    background-color: #f0f4f8;
    padding: 1rem;
    margin: 1rem 0;
    border: solid 1px #cccccc;
}

.main {
    padding: 1rem;
    font-size: 1.2rem;
    color: #333;
    border: solid 1px #cccccc;
}

.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px 16px;
    z-index: 100;
    text-decoration: none;
    /* transition: top 0.3s ease; */
}

.skip-link:focus {
    top: 0;
}

.btn-custom {
    background-color: #0d7ea2;
    color: white;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
}

.btn-custom:hover {
    background-color: #074b69;
}

.btn-custom:focus {
    outline-offset: 4px;
    box-shadow: none;
}

.btn-custon-link {
    color: #0d7ea2;
    text-decoration: underline;
}

.btn-custon-link:hover {
    color: #074b69;
    text-decoration: underline;
}

.btn-custon-link:focus {
    outline-offset: 4px;
    box-shadow: none;
}

.input-custom {
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 0.25rem;
    width: 300px;
}

.input-custom:hover {
    border-color: #0d7ea2;
}

.input-custom:focus {
    outline-offset: 4px;
    box-shadow: none;
}
</style>