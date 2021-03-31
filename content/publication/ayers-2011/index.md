+++
abstract = """Testing for association between multiple markers and a phenotype can not only capture untyped causal variants in weak linkage disequilibrium with nearby typed markers but also identify the effect of a combination of markers. We propose a sliding window approach that uses multimarker genotypes as variables in a penalized regression. We investigate a penalty with three separate components: (1) a group least absolute shrinkage and selection operator (LASSO) that selects multimarker genotypes in a gene to be included in or excluded from the model, (2) an allele-sharing penalty that encourages multimarker genotypes with similar alleles to have similar coefficients, and (3) a penalty that shrinks the size of coefficients while performing model selection. The penalized likelihood is minimized with a cyclic coordinate descent algorithm, allowing quick coefficient estimation for a large number of markers. We compare our method to single-marker analysis and a gene-based sparse group LASSO on the Genetic Analysis Workshop 17 data for quantitative trait Q2. We found that all of the methods were underpowered to detect the simulated rare causal variants at the low false-positive rates desired in association studies. However, the sparse group LASSO on multi-marker genotypes seems to provide some advantage over the sparse group LASSO applied to single SNPs within genes, giving further evidence that there may be an advantage to modeling combinations of rare variant alleles over modeling them individually."""
authors = ["Ayers KL", "Mamasoula C", "Cordell HJ"]
date = "2011-11-29"
doi = "10.1186/1753-6561-5-s9-s92"
featured = false
highlight = true
math = true
publication = "*BMC Proceedings* 2011; 5(S9):S92"
publication_short = "*BMC Proc* 2011; 5:S92"
publication_types = ["2"]
summary = "*BMC Proceedings* 2011; 5(S9):S92"
tags = ["Mamasoula"]
title = "Penalized-regression-based multimarker genotype analysis of Genetic Analysis Workshop 17 data"
+++
