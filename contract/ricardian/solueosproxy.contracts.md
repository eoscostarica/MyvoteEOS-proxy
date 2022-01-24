<h1 class="contract">addproxy</h1>

spec-version: 0.0.2
title: Add Proxy
summary: This action will either insert or update an entry in the proxies table. If an entry exists with the same name as the specified user parameter, the record is updated. If a record does not exist, a new record is created. The data is stored in the multi index table. The ram costs are paid by the smart contract.
icon:

<h1 class="contract">rmproxy</h1>

spec-version: 0.0.2
title: Remove Proxy
summary: This action will remove an entry from the proxies table if an entry in the multi index table exists with the specified name.
icon:

<h1 class="contract">addproducer</h1>

spec-version: 0.0.2
title: Add Block Producer
summary: This action will either insert or update an entry in the producers table. If an entry exists with the same name as the specified user parameter, the record is updated. If a record does not exist, a new record is created. The data is stored in the multi index table. The ram costs are paid by the smart contract.
icon:

<h1 class="contract">rmproducer</h1>

spec-version: 0.0.2
title: Remove Block Producer
summary: This action will remove an entry from the producers table if an entry in the multi index table exists with the specified name.
icon:

<h1 class="contract">clear</h1>

spec-version: 0.0.2
title: Clear
summary: This action will remove all entries from both proxy and producer tables. It is meant for development purposes only.
icon:
