package misk.web.interceptors

import misk.MiskDefault
import misk.web.NetworkInterceptor
import javax.inject.Qualifier

/**
 * Denotes an early binding target, which will be automatically installed.
 * For example, the [NetworkInterceptor] is bound with [EarlyBind] and is automatically
 * installed before [MiskDefault] and non-annotated user provided interceptors.
 */
@Qualifier
@Retention(AnnotationRetention.RUNTIME)
@Target(
  AnnotationTarget.CLASS,
  AnnotationTarget.VALUE_PARAMETER,
  AnnotationTarget.FIELD,
  AnnotationTarget.TYPE
)
annotation class EarlyBind
